<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">
        Log in
    </h1>     
    <button @click="login" class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:bg-slate-100 hover:shadow transition duration-150">
        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo">
        <span>Login with Google</span>
    </button>
  </div>
</template>

<script setup>

const supabase = useSupabaseClient()

// const user = useSupabaseUser()

const login = async() => {
    const { error } = supabase.auth.signInWithOAuth({
        provider: "google"
    })

    if (error) {
    console.log('Login Error:', error)
  } else {
    await fetchWordPressData()
  }
}

const fetchWordPressData = async () => {
  const { data } = await nuxtApp.$supabase.auth.getSession()
  const jwtToken = data.session?.access_token

  const response = await fetch('https://your-wordpress-site.com/wp-json/custom/v1/auth', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ other_params: 'value' }),
  })

  const result = await response.json()
}

</script>