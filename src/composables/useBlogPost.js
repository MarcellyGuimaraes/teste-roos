// src/composables/useBlogPost.js
import { ref } from "vue";
import { api } from "boot/axios";
import { useRoute } from "vue-router";
import { date } from "quasar";

export function useBlogPost() {
  const route = useRoute();
  const article = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchArticle = async () => {
    const id = route.params.id;
    if (!id) return;

    try {
      loading.value = true;
      const { data } = await api.get(`/articles/${id}`);
      article.value = data;
    } catch (err) {
      console.error("Erro ao carregar artigo:", err);
      error.value = "Não foi possível carregar o artigo";
    } finally {
      loading.value = false;
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "";

    const date = new Date(timestamp._seconds * 1000);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const shareArticle = (platform) => {
    const url = window.location.href;
    const title = article.value?.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
      email: `mailto:?subject=${title}&body=${url}`,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      // Aqui você pode adicionar uma notificação de sucesso
      return;
    }

    const shareUrl = shareUrls[platform];
    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  return {
    article,
    loading,
    error,
    fetchArticle,
    formatDate,
    shareArticle,
  };
}
