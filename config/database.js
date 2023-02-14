module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-cfj3ch1a6gductgjfqt0-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "tarotascards"),
      user: env("DATABASE_USERNAME", "tarotascardsadmin"),
      password: env("DATABASE_PASSWORD", "mVVt8FgE07W4e1zHAiBK1Sm9dvaBEh2J"),
      ssl: env.bool("DATABASE_SSL", true),
    },
    acquireConnectionTimeout: 600000,
  },
});
