<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/sleeping">Sleeping</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/feeding" >Feeding</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/solids" >Solids</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/about">About</RouterLink>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>

</script>

<style scoped>
.nav-link {
  padding: 15px;
  color: #086c79;
  text-decoration: none;

}
</style>
