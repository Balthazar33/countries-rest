<template>
    <div class="container-fluid">
        <div class="inner-wrapper">
            <div class="countries_info">

            <!-- SEARCH BAR -->
            <div class="row">
                <div class="search-bar mt-3 col-xs-12 col-sm-12">
                    <label for="search-bar"><i class="fa fa-search"></i></label>
                    <input type="text" v-model="search_str" name="search-bar" class="form-control search-input" placeholder="Search for country">
                </div>
            </div>

            <!-- SELECT FROM REGION -->
            <div class="row">
                <div class="col-sm-6 col-xs-6">
                    <div class="filter-by-region mb-5">
                        <select name="filter_by_region" class="form-control mt-5" v-model="region_filter" id="filter_by_region" @change="region_changed">
                            <option value="" disabled aria-disabled>Filter By Region</option>
                            <option v-for="(region, index) in regions" :key="'region'+index" :value="region">
                                {{region}}
                            </option>
                    </select>
                    </div>
                </div>
            </div>

            <!-- LIST OF COUNTRIES -->
            <div class="countries_list">
                    <div class="wrapper col-sm-11 m-auto">
                        <div class="row" v-for="(country,index) in Math.ceil((countries_data_all_computed.length)/4)" :key="index+'countrything'">
                        <div class="col-sm-6 col-xs-12 col-md-6 col-lg-3" v-for="(countryitem,count) in countries_data_all_computed.slice(index+(index*chunkSize),index+(index*chunkSize)+4)" :key="'xxx'+count">
                            <base-card swellOnHover>
                            <div  class="country_card mb-3" @click="toCountryDetail(countryitem)">
                                <!-- :class="isDarkModeOn?'card_shadow_light':'card_shadow_dark'" -->
                                <div class="country_flag">
                                    <img  class="img-responsive" :src="countryitem.flag" :alt="countryitem.name">
                                </div>
                                <div class="text-left p-4">
                                    <h4 class="country_name">{{countryitem.name}}</h4>
                                    <ul class="country_info_list mt-3">
                                        <li>Population: {{countryitem.population}}</li>
                                        <li>Region: {{countryitem.region}}</li>
                                        <li>Capital: {{countryitem.capital}}</li>
                                    </ul>
                                </div>
                            </div>
                            </base-card>
                    </div>
                            
                        </div>
       
                    </div>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from  'axios'
import { mapGetters } from 'vuex';
export default {

    name:'Home',
    data(){
        return {
            regions:[
                'africa', 'americas', 'asia', 'europe', 'oceania'
                ],
                countries_data_all:[

                ],
                region_filter:'',
                filteredCountries:[],
                chunkSize:4,
                search_str:'',
                isDarkMode:false
        }
    },
    mounted:function(){
        this.getAPIData();
    },
    methods:{
        getAPIData(){
            var self = this;
            axios.
            get("https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag") //get all countries
            .then(response=>{
                self.countries_data_all = response.data;
            });
        },
        region_changed(){
            var self = this;
            axios.
            get("https://restcountries.eu/rest/v2/region/"+self.region_filter) //fetch countries based on region
            .then(response=>{
                self.countries_data_all = response.data;

            });
        },
        toCountryDetail(item){
            this.$router.push({name:'Country',path:'/country/'+item.name,params:{country_name:item.name}}); //go to country's detail page
        }
    },
    computed:{
        countries_data_all_computed(){
            var self = this;
            var countryData = self.countries_data_all;
            return countryData.filter(function(item){
                return item.name.toLowerCase().includes(self.search_str.toLowerCase()); //return filtered list by name
            });
            
        },
        ...mapGetters(['isDarkModeOn'])
    }
}
</script>

<style scoped>

</style>