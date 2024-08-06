export default function ({ store }) {
  store.$onAction(({ name, store, args, after, onError }) => {
    if (name === 'getUserInfos') {
      store.userLoading = true;
      after(() => {
        store.userLoading = false;
      });
      onError(() => {
        store.userLoading = false;
      });
    }
  });

  store.getUserInfos();
}
