<template lang="pug">
  .layout
    header.p-4.shadow-lg(class="md:flex md:items-center md:justify-around md:pb-4")
      g-link(to="/") Pitt Wu's Blog
      nav.flex.flex-wrap.items-center.justify-around.text-primary.font-bold
        ul.list-reset(class="md:flex md:items-center")
          li(v-for="node in list" :key="node.name" class="md:ml-4")
            g-link.nav__link.block.no_underline.py-2(class="hover:text-darkgray md:boder-none md:p-0" :to="node.link") {{ node.name }}
    //- content
    slot
    //- Footer
    footer.mt-20.font-light.text-gray.w-full.text-center.p-4
      p.text-base.block.text-primary.font-bold Copyright &copy; 2020 Pitt Wu
      p.text-xs.block Developed using Gridsome, Tailwind CSS, Contentful
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      list: [
        { name: 'About', link: '/about/' },
      ],
    }
  }
}
</script>
