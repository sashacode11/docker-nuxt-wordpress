<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})

const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: 'get',
  query: {
    query: `
      query NewQuery {
        posts(first:10){
          nodes {
            title
            date
            excerpt
            uri
          }
        }
      }`
}, 
transform(data:any){
 return data.data.posts.nodes as Array<Record<'title' | 'date' | 'excerpt' | 'uri', string>>;
}
});
</script>

<template>
  <div>
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
      <Post v-for="post in data" :key="post.uri" :post="post"></Post>
    </div>
  </div>
</template>