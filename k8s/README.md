# Desafio 03


### Start api e front

```sh
kubectl apply -f nest-api/deploy.yaml
kubectl expose -f nest-api/deploy.yaml
kubectl port-forward service/nest-api 3000

kubectl apply -f front-react/deploy.yaml
kubectl expose -f front-react/deploy.yaml
kubectl port-forward service/front-react 3001:3000
```

Acessar: http://localhost:3001