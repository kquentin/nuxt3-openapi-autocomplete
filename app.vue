<template></template>

<script setup lang="ts">

import { apiRequest } from "~/api/client";
import { components } from "~/api/endpoints";

const pet = await apiRequest(
    "/pet/{petId}",
    "get",
    {
      petId: 1
    }
);

const findPet = await apiRequest(
    "/pet/findByStatus",
    "get",
    {},
    {
      status: "available"
    }
);

// does not work with petstore3, probably because the expected Content-Type is "application/xml" and not "application/json".
const payload: components["schemas"]["Pet"] = {
  name: "nuxt",
  photoUrls: []
}

const createPet = await apiRequest(
    "/pet",
    "post",
    {},
    {},
    {
      name: payload.name,
      photoUrls: payload.photoUrls
    } // or payload
);

console.log(pet.data.value)
console.log(findPet.data.value)
console.log(createPet.data.value)

</script>
