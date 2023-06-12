add this to your ready.js

        try {
          await sql.connect('Server=YOUR_IP,1433;Database=RustyHearts_Account;User Id=sa;Password=YOUR_PASSWORD;Encrypt=false')
          console.dir("Connected to Database! Rusty Hearts")
      } catch (err) {
          console.log("Failed to connect to Database! Rusty Hearts")
      }

![Captura de ecrã 2023-06-12 174729](https://github.com/Zheity/Give-Zen/assets/60073129/08cb2e6b-6fd2-4a3a-b3a2-93d2fb404349)
![Captura de ecrã 2023-06-12 174852](https://github.com/Zheity/Give-Zen/assets/60073129/75cc3e54-e441-44aa-8093-72c635a8a5c2)
![Captura de ecrã 2023-06-12 174943](https://github.com/Zheity/Give-Zen/assets/60073129/ae6efa40-9b01-499b-bcef-880a31873db7)
