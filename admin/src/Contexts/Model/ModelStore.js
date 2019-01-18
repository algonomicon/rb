import { action, observable, set } from 'mobx'

class ModelStore {
  @observable models = []
  @observable loading = false

  @action fetchModels() {
    this.loading = true

    fetch(`${process.env.INFERNO_APP_API}/models`)
      .then(response => response.json())
      .then(models => this.models = models)
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }

  @action putModel(data) {
    this.loading = true

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'test'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    }

    fetch(`${process.env.INFERNO_APP_API}/models/${data.id}`, options)
      .then(response => response.json())
      .then(model => this.models.map(i => i.id === data.id ? set(i, model) : i))
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default ModelStore