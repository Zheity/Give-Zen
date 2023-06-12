add this to your ready.js

        try {
          await sql.connect('Server=YOUR_IP,1433;Database=RustyHearts_Account;User Id=sa;Password=YOUR_PASSWORD;Encrypt=false')
          console.dir("Connected to Database! Rusty Hearts")
      } catch (err) {
          console.log("Failed to connect to Database! Rusty Hearts")
      }
