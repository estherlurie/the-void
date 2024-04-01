export const actions = {
  default: async ({ request, cookies }) => {
      const form = await request.formData();
      const username = form.get('username');
      const password = form.get('password');
  },
  logout: async ({ request, cookies }) => {
    // TODO: 
  },
  register: async ({ request, cookies }) => {
    //TODO: 
  }
}
