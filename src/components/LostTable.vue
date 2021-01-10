<template>
    <table>
        <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Type d'objets</th>
            <th>Nature d'objets</th>
            <th>Gare</th>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
            <td>
                {{ TODO }}
            </td>
            <td>
                {{ TODO }}
            </td>
            <td>
                {{ TODO }}
            </td>
            <td>
                {{ TODO }}
            </td>
            <td>
                {{ TODO }}
            </td>
        </tr>
    </table>

</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
    name:"LostTable",
    data()
    {
        return {list:undefined}
    },
    mounted()
    {
        Vue.axios.get('https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&sort=date&facet=date&facet=gc_obo_gare_origine_r_name&facet=gc_obo_nature_c&facet=gc_obo_type_c&refine.date=2020')
        .then((resp)=>{
            this.list=resp
            console.warn(resp)
        })
    }


}
</script>

<style>

</style>
