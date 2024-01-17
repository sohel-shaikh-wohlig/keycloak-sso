# Running Keycloak on Docker
```
docker run -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin -p 8080:8080 quay.io/keycloak/keycloak:22.0.0 start-dev
```

### Authenticating Users with OpenID Connect (OIDC Playground)
```
Create client in releam with the following values:
- Client ID: oidc-playground
- Client authentication: Off
- Authenticationflow:Standard flow
- Valid Redirect URIs: http://localhost:8000/
- Web Origins: http://localhost:8000

cd oidc-playground =>  npm start
```


### Authorizing Access with OAuth 2.0 (OAuth 2.0 Playground)
```
Create client in releam with the following values:
- Client type: OpenID Connect
- Client ID: oauth-playground
- Client authentication: Off
- Valid Redirect URIs: http://localhost:8000/
- Web Origins: http://localhost:8000

cd oauth-playground => 
frontend npm start
backend npm start
```

### github integration