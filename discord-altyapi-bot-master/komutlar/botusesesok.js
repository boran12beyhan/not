client.on("ready", async () => {
    let sesliKanalID = client.channels.cache.get("980554851882790923");
    if (sesliKanalID)
      sesliKanalID.join()
        .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
  });