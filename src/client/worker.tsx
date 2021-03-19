import React from "react";

declare const self: ServiceWorkerGlobalScope;

console.log("Service Worker Loaded...");



self.addEventListener("push", (e:any) => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "gamicacloud notification update",
   
  });
});