<template>
  <q-page padding>
    <div class="container">
      <div class="row items-center justify-between q-mb-lg">
        <h1 class="text-h4 q-my-none">Gerenciar Categorias</h1>
        <router-link to="/categories/new">
          <q-btn color="primary" icon="add" label="Nova Categoria" />
        </router-link>
      </div>

      <q-table
        :rows="categories"
        :columns="columns"
        row-key="id"
        :loading="loading"
        :filter="filter"
        v-model:pagination="pagination"
      >
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

        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-sm">
            <q-btn
              flat
              round
              color="primary"
              icon="edit"
              :to="`/categories/${props.row.id}/edit`"
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
          <span class="q-ml-sm">
            Tem certeza que deseja excluir esta categoria?
            <br />
            <small class="text-warning"
              >Isso também excluirá todos os artigos associados a ela.</small
            >
          </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn
            flat
            label="Excluir"
            color="negative"
            @click="deleteCategory"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const $q = useQuasar();

// Estado
const categories = ref([]);
const loading = ref(true);
const filter = ref("");
const confirmDeleteDialog = ref(false);
const categoryToDelete = ref(null);
const pagination = ref({
  rowsPerPage: 10,
});

// Definição das colunas
const columns = [
  {
    name: "name",
    required: true,
    label: "Nome",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "code",
    label: "Código",
    field: "code",
    sortable: true,
  },
  {
    name: "actions",
    label: "Ações",
    field: "actions",
  },
];

// Métodos
const loadCategories = async () => {
  try {
    loading.value = true;
    const response = await api.get("/categories");
    categories.value = response.data;
  } catch (error) {
    $q.notify({
      color: "negative",
      message: "Erro ao carregar categorias",
      icon: "error",
    });
  } finally {
    loading.value = false;
  }
};

const confirmDelete = (category) => {
  categoryToDelete.value = category;
  confirmDeleteDialog.value = true;
};

const deleteCategory = async () => {
  try {
    await api.delete(`/categories/${categoryToDelete.value.id}`);
    await loadCategories();
    confirmDeleteDialog.value = false;
    $q.notify({
      color: "positive",
      message: "Categoria excluída com sucesso",
      icon: "check",
    });
  } catch (error) {
    $q.notify({
      color: "negative",
      message: "Erro ao excluir categoria",
      icon: "error",
    });
  }
};

// Lifecycle
onMounted(() => {
  loadCategories();
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
