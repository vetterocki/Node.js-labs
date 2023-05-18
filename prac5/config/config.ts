import convict from "convict";

export const config = convict({
    port: {
        doc: "Port for requests listening from client",
        format: Number,
        default: 3000,
        env: "PORT",
    },
})
    .validate({allowed: "strict"})
    .getProperties();
