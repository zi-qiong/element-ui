<template>
  <div>
    <Button>按钮</Button>
    <Button size="medium">按钮</Button>
    <Button size="small">按钮</Button>

    <Button type="success">按钮</Button>
    <Button type="warning">按钮</Button>
    <Button type="danger">按钮</Button>

    <Button type="danger" disabled>按钮</Button>

    <Button type="danger" round>按钮</Button>

    <Button type="danger" round>按钮</Button>

    <Button circle icon="iconDelate"></Button>
    <Button size="small" circle icon="iconDelate"></Button>

    <Button type="danger" plain>按钮</Button>
    <Button type="danger" loading>按钮</Button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Divider></Divider>
    <Divider>123</Divider>
    <div>
      111
      <Divider direction="vertical"></Divider>
      111
    </div>

    <Row :gutter="20">
      <Clo :span="6" :offset="6">123</Clo>
    </Row>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>
