<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-card class="form-card">
        <q-card-section>
          <div class="text-h6">
            {{ isEditing ? "Editar Artigo" : "Novo Artigo" }}
          </div>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <!-- Título -->
            <q-input
              v-model="form.title"
              label="Título"
              :rules="[
                (val) => !!val || 'Título é obrigatório',
                (val) => val.length >= 3 || 'Mínimo de 3 caracteres',
                (val) => val.length <= 100 || 'Máximo de 100 caracteres',
              ]"
              filled
            />

            <!-- Categoria -->
            <q-select
              v-model="form.category"
              :options="categories"
              option-label="name"
              option-value="code"
              label="Categoria"
              filled
              :rules="[(val) => !!val || 'Categoria é obrigatória']"
            />

            <!-- Resumo -->
            <q-input
              v-model="form.summary"
              type="textarea"
              label="Resumo"
              :rules="[
                (val) => !!val || 'Resumo é obrigatório',
                (val) => val.length >= 10 || 'Mínimo de 10 caracteres',
                (val) => val.length <= 500 || 'Máximo de 500 caracteres',
              ]"
              filled
              autogrow
            />

            <!-- Texto completo -->
            <q-input
              v-model="form.fullText"
              type="textarea"
              label="Texto Completo"
              :rules="[
                (val) => !!val || 'Texto completo é obrigatório',
                (val) => val.length >= 50 || 'Mínimo de 50 caracteres',
              ]"
              filled
              autogrow
            />

            <!-- Autor -->
            <q-input
              v-model="form.author"
              label="Autor"
              :rules="[
                (val) => !!val || 'Autor é obrigatório',
                (val) => val.length >= 2 || 'Mínimo de 2 caracteres',
                (val) => val.length <= 100 || 'Máximo de 100 caracteres',
              ]"
              filled
            />

            <!-- Imagem -->
            <q-file v-model="form.image" label="Imagem" accept="image/*" filled>
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>

            <!-- Preview da imagem -->
            <div v-if="imagePreview || form.imageUrl" class="q-mt-sm">
              <img
                :src="imagePreview || form.imageUrl"
                style="max-width: 200px; max-height: 200px"
                class="q-mb-md"
              />
            </div>

            <!-- Botões -->
            <div class="row justify-end q-gutter-sm">
              <q-btn
                label="Cancelar"
                color="grey"
                :to="{ name: 'articles' }"
                flat
              />
              <q-btn
                type="submit"
                :label="isEditing ? 'Salvar' : 'Criar'"
                color="primary"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";

export default {
  name: "ArticleForm",

  props: {
    articleId: {
      type: String,
      default: null,
    },
  },

  setup(props) {
    const $q = useQuasar();
    const categories = ref([]);
    const imagePreview = ref(null);
    const isEditing = ref(!!props.articleId);

    const form = ref({
      title: "",
      category: null,
      summary: "",
      fullText: "",
      author: "",
      image: null,
      imageUrl: "",
    });

    const loadCategories = async () => {
      try {
        const response = await api.get("/categories");
        categories.value = response.data;
      } catch (error) {
        $q.notify({
          type: "negative",
          message: "Erro ao carregar categorias",
          icon: "report_problem",
        });
      }
    };

    const loadArticle = async () => {
      if (!props.articleId) return;

      try {
        const response = await api.get(`/articles/${props.articleId}`);
        const article = response.data;
        form.value = {
          title: article.title,
          category: article.category,
          summary: article.summary,
          fullText: article.fullText,
          author: article.author,
          imageUrl: article.imageUrl,
          image: null,
        };
      } catch (error) {
        $q.notify({
          type: "negative",
          message: "Erro ao carregar artigo",
          icon: "report_problem",
        });
      }
    };

    const onSubmit = async () => {
      try {
        // Prepara os dados básicos do artigo sempre necessários
        const articleData = {
          title: form.value.title,
          category:
            typeof form.value.category === "object"
              ? form.value.category.code
              : form.value.category,
          summary: form.value.summary,
          fullText: form.value.fullText,
          author: form.value.author,
        };

        // Se houver uma imagem existente e não estiver enviando uma nova
        if (form.value.imageUrl && !form.value.image) {
          articleData.imageUrl = form.value.imageUrl;
        }

        const url = props.articleId
          ? `/articles/${props.articleId}`
          : "/articles";

        let response;

        // Se tiver uma nova imagem, usa FormData
        if (form.value.image) {
          const formData = new FormData();
          // Adiciona todos os campos ao FormData
          Object.entries(articleData).forEach(([key, value]) => {
            formData.append(key, value);
          });
          formData.append("image", form.value.image);

          response = await api[props.articleId ? "put" : "post"](url, formData);
        } else {
          // Sem nova imagem, envia como JSON
          response = await api[props.articleId ? "put" : "post"](
            url,
            articleData
          );
        }

        $q.notify({
          type: "positive",
          message: `Artigo ${
            props.articleId ? "atualizado" : "criado"
          } com sucesso`,
          icon: "check",
        });
        window.location.href = `${window.location.origin}/#/admin/articles`;
      } catch (error) {
        console.error("Erro ao salvar artigo:", error);
        $q.notify({
          type: "negative",
          message: "Erro ao salvar artigo",
          icon: "report_problem",
        });
      }
    };

    // Watch para criar preview da imagem
    watch(
      () => form.value.image,
      (newImage) => {
        if (newImage) {
          imagePreview.value = URL.createObjectURL(newImage);
        } else {
          imagePreview.value = null;
        }
      }
    );

    onMounted(() => {
      loadCategories();
      if (props.articleId) {
        loadArticle();
      }
    });

    return {
      form,
      categories,
      imagePreview,
      isEditing,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.form-card {
  max-width: 800px;
  margin: 0 auto;
}
</style>
