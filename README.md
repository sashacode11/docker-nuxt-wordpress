<!-- Instruction of run the docker nuxt localWordpress -->
docker-compose.yml and .env is the script to run wordpress with docker:
1. npm run dev : Run the project
2. docker compose up -d (maintain the current Wordpress)/ docker compose down : Run/ stop the docker container
3. http://localhost:8080/wp-admin/ : Run the wordpress

4. Google OAuth: npm install @nuxtjs/supabase@0.3.0

5. Pass OAuth to wordpress: 
    - In Wordpress: install plugin JWT Authentication for WP-API
    - In command line, navigate to: nano wp-config.php
        Add: 
            // For JWT authentication
            define('JWT_AUTH_SECRET_KEY', '<your secret key>');
            define('JWT_AUTH_CORS_ENABLE', true);
        To get your secret key, run: openssl rand -base64 32
6. Add code to fetch API in Wordpress, look at login.vue file > fetchWordPressData

<!-- Run discourse -->
<!-- Link how to install discourse and details knowledge: https://meta.discourse.org/t/install-discourse-for-development-using-docker/102009 -->
1. d/rails s : in one terminal
2. d/ember-cli : run in another terminal
3. http://localhost:4200/
4. d/shutdown_dev  : stop Discourse
5. d/boot_dev : start Discourse


