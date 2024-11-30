<template>
  <q-page padding>
    <div class="container">
      <div class="row items-center justify-between q-mb-lg">
        <h1 class="text-h4 q-my-none">Gerenciar Artigos</h1>
        <router-link to="/articles/new">
          <q-btn color="primary" icon="add" label="Novo Artigo" />
        </router-link>
      </div>

      <!-- Table/List of Articles -->
      <q-table
        :rows="articles"
        :columns="columns"
        row-key="id"
        :loading="loading"
        :filter="filter"
        v-model:pagination="pagination"
      >
        <!-- Filtro -->
        <template v-slot:top-right>
          <q-input
            v-model="filter"
            placeholder="Buscar..."
            dense
            borderless
            class="q-mr-sm"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <!-- Coluna de Imagem -->
        <template v-slot:body-cell-image="props">
          <q-td :props="props">
            <q-img
              :src="props.row.imageUrl || '/placeholder.png'"
              width="50px"
              height="50px"
              class="rounded-borders"
            />
          </q-td>
        </template>

        <!-- Coluna de Data -->
        <template v-slot:body-cell-publicationDate="props">
          <q-td :props="props">
            {{ formatDate(props.row.publicationDate) }}
          </q-td>
        </template>

        <!-- Coluna de Ações -->
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-sm">
            <q-btn
              flat
              round
              color="primary"
              icon="edit"
              :to="`/articles/${props.row.id}/edit`"
            >
              <q-tooltip>Editar</q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="negative"
              icon="delete"
              @click="confirmDelete(props.row)"
            >
              <q-tooltip>Excluir</q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>

    <!-- Modal de Confirmação -->
    <q-dialog v-model="confirmDeleteDialog">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="warning" text-color="white" />
          <span class="q-ml-sm"
            >Tem certeza que deseja excluir este artigo?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Excluir" color="negative" @click="deleteArticle" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import { date } from "quasar";

const $q = useQuasar();

// Estado
const articles = ref([]);
const loading = ref(true);
const filter = ref("");
const confirmDeleteDialog = ref(false);
const articleToDelete = ref(null);
const pagination = ref({
  rowsPerPage: 10,
});

// Definição das colunas
const columns = [
  {
    name: "image",
    label: "Imagem",
    field: "imageUrl",
    align: "left",
  },
  {
    name: "title",
    required: true,
    label: "Título",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
  {
    name: "category",
    label: "Categoria",
    field: "category",
    sortable: true,
  },
  {
    name: "author",
    label: "Autor",
    field: "author",
    sortable: true,
  },
  {
    name: "publicationDate",
    label: "Data",
    field: "publicationDate",
    sortable: true,
  },
  {
    name: "actions",
    label: "Ações",
    field: "actions",
  },
];

// Métodos
const loadArticles = async () => {
  try {
    loading.value = true;
    const response = await api.get("/articles");
    articles.value = response.data;
  } catch (error) {
    $q.notify({
      color: "negative",
      message: "Erro ao carregar artigos",
      icon: "error",
    });
  } finally {
    loading.value = false;
  }
};

const confirmDelete = (article) => {
  articleToDelete.value = article;
  confirmDeleteDialog.value = true;
};

const deleteArticle = async () => {
  try {
    await api.delete(`/articles/${articleToDelete.value.id}`);
    await loadArticles();
    confirmDeleteDialog.value = false;
    $q.notify({
      color: "positive",
      message: "Artigo excluído com sucesso",
      icon: "check",
    });
  } catch (error) {
    $q.notify({
      color: "negative",
      message: "Erro ao excluir artigo",
      icon: "error",
    });
  }
};

const formatDate = (dateValue) => {
  if (!dateValue) return "";
  const timestamp = dateValue.seconds * 1000;
  return date.formatDate(timestamp, "DD/MM/YYYY");
};

// Lifecycle
onMounted(() => {
  loadArticles();
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
