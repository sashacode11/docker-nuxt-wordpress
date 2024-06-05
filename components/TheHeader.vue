<template>
    <header className="relative w-full p-6 h-85px mx-auto bg-slate-200 flex justify-between">
        <NuxtLink className="text-4xl" to="/">Nuxt WP</NuxtLink>
        <div v-if="user" class="flex">
            <NuxtLink to="/posts" class="mr-5">Blogs</NuxtLink>
            <NuxtLink to="http://localhost:4200/c/post/6" class="mr-5">Forum</NuxtLink>
            <p class="cursor-pointer" @click="logout">Logout</p>
        </div>
        <NuxtLink v-else to="/login">Login</NuxtLink>
    </header>
</template>

<script setup>
const user = useSupabaseUser()

const supabase = useSupabaseClient()

const logout = async () => {
    // Sign out the user from your app using Supabase
    const { error } = await supabase.auth.signOut()

    // Clear any session info stored via your server's API
    try {
        await $fetch('/api/_supabase/session', {
            method: "POST",
            body: { event: "SIGNED_OUT", session: null }
        })
    } catch (fetchError) {
        console.log('Session Clear Error:', fetchError)
    }

    // Handle any errors from Supabase sign-out
    if (error) {
        console.log('Supabase Sign-Out Error:', error)
    }
    user.value = null
    navigateTo('/')
    
}

</script>