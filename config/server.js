module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  settings: {
    cors: {
      enabled: true,
      origin: ["*"],
    },
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "63a3569cc607595167196ad146d5f447"),
    },
  },
});
