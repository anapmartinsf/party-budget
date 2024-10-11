const mongoose = require ("mongoose")

    async function main() {
        try {
            await mongoose.connect(
                "mongodb+srv://ana:NkLO6ZKj9Jq6VWP7@cluster0.a6iqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            )

            console.log("conectado ao banco")
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    } 

    module.exports = main
