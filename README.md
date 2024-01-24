# Running Keycloak on Docker
```
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:23.0.4 start-dev
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
```

Create client in realm with the following values:
- Client ID: demo-client
- Client authentication: Off
- Authenticationflow:Standard flow
- Valid Redirect URIs: http://localhost:8081/
- Web Origins: http://localhost:8081


Go to the identity providers tab in keycloak panel and create a provider and copy the redirect_uri from keycloak to use it while creating the github Oauth application
Create an Oauth app in Github to get the client ID and client secret.

cd github-sso =>  npm run serve
```