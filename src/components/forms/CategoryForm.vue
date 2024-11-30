<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-card class="form-card">
        <q-card-section>
          <div class="text-h6">
            {{ isEditing ? "Editar Categoria" : "Nova Categoria" }}
          </div>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <!-- Nome -->
            <q-input
              v-model="form.name"
              label="Nome"
              :rules="[
                (val) => !!val || 'Nome é obrigatório',
                (val) => val.length >= 3 || 'Mínimo de 3 caracteres',
                (val) => val.length <= 100 || 'Máximo de 100 caracteres',
              ]"
              filled
            />

            <!-- Código -->
            <q-input
              v-model="form.code"
              label="Código"
              :rules="[
                (val) => !!val || 'Código é obrigatório',
                (val) => val.length >= 3 || 'Mínimo de 3 caracteres',
                (val) => val.length <= 50 || 'Máximo de 50 caracteres',
                (val) =>
                  /^[a-z0-9-]+$/.test(val) ||
                  'Apenas letras minúsculas, números e hífen',
              ]"
              filled
              hint="Use apenas letras minúsculas, números e hífen"
            />

            <!-- Botões -->
            <div class="row justify-end q-gutter-sm">
              <q-btn
                label="Cancelar"
                color="grey"
                :to="{ name: 'categories' }"
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
import { ref, onMounted } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";

export default {
  name: "CategoryForm",

  props: {
    categoryId: {
      type: String,
      default: null,
    },
  },

  setup(props) {
    const $q = useQuasar();
    const isEditing = ref(!!props.categoryId);

    const form = ref({
      name: "",
      code: "",
    });

    const loadCategory = async () => {
      if (!props.categoryId) return;

      try {
        const response = await api.get(`/categories/${props.categoryId}`);
        form.value = response.data;
      } catch (error) {
        $q.notify({
          color: "negative",
          message: "Erro ao carregar categoria",
          icon: "report_problem",
        });
      }
    };

    const onSubmit = async () => {
      try {
        const url = props.categoryId
          ? `/categories/${props.categoryId}`
          : "/categories";

        const method = props.categoryId ? "put" : "post";

        await api[method](url, form.value);

        $q.notify({
          color: "positive",
          message: `Categoria ${
            props.categoryId ? "atualizada" : "criada"
          } com sucesso`,
          icon: "check",
        });

        // Redireciona para a lista de categorias
        this.$router.push({ name: "categories" });
      } catch (error) {
        $q.notify({
          color: "negative",
          message: "Erro ao salvar categoria",
          icon: "report_problem",
        });
      }
    };

    onMounted(() => {
      if (props.categoryId) {
        loadCategory();
      }
    });

    return {
      form,
      isEditing,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.form-card {
  max-width: 600px;
  margin: 0 auto;
}
</style>
