<template>
  <div class="container">
    <div class="wrapper">
      <div class="country_detail">
        <div class="col-md-2 col-sm-4 col-xs-4 col-lg-3">
          <div class="back_button d-flex mt-3">
            <button
              class="back_btn btn btn-sm" 
              @click="goBack"
              :class="isDarkModeOn?'btn-outline-light':'btn-outline-dark'"
            >
              <span><i class="fa fa-long-arrow-left"></i></span> Back
            </button>
          </div>
        </div>

        <div class="col-sm-12 col-xs-12">
          <div class="country_card_single mt-5">
            <div v-if="country_full_data.length > 0">
              <div class="country_data_single mt-5 col-xs-12 col-sm-12">
                <!-- Flag icon -->
                <div class="row">
                  <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                    <div class="country_flag_single">
                      <img
                        class="img-responsive"
                        :src="country_full_data[0].flag"
                        alt="Flag of country"
                      />
                    </div>
                  </div>
                  <!-- textual data -->
                  <div class="col-md-6 col-lg-6">
                    <div class="col-sm-12 col-xs-12 p-0">
                      <div class="textual_data_single text-left p-4 bg-light">
                        <h4 class="country_name_single">
                          {{ country_full_data[0].name }}
                        </h4>
                        <ul class="country_info_list_single mt-3">
                          <li>
                            <span class="font-weight-bold">Population:</span>
                            {{ country_full_data[0].population }}
                          </li>
                          <li>
                            <span class="font-weight-bold">Region:</span>
                            {{ country_full_data[0].region }}
                          </li>
                          <li>
                            <span class="font-weight-bold">Capital:</span>
                            {{ country_full_data[0].capital }}
                          </li>
                        </ul>
                        <!-- Additional info -->
                        <ul class="additional_info mt-5">
                          <li
                            v-for="(value, key) in additional_info"
                            :key="key + 'key'"
                          >
                            <span v-if="key == 'Currencies'"
                              ><span class="font-weight-bold">{{ key }}:</span
                              >{{ value[0].code }}</span
                            >

                            <span v-else-if="key == 'Languages'">
                              <span class="font-weight-bold">Languages:</span>
                              <span
                                v-for="(value, index) in additional_info[key]"
                                :key="'value' + index"
                                >{{ value.name
                                }}{{
                                  index != additional_info[key].length - 1
                                    ? ","
                                    : ""
                                }}</span
                              >
                            </span>
                            <span v-else
                              ><span class="font-weight-bold">{{ key }} : </span
                              >{{ value[0] }}</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from 'vuex';
export default {
  name: "CountryData",
  data() {
    return {
      countryname: "",
      country_full_data: [],
      additional_info: {},
      // isDarkMode:this.$store.getters.isDarkModeOn //Get value of mode from store
    };
  },
  mounted() {
    var self = this;
    // self.isDarkMode = this.$store.getters.isDarkModeOn; //Get value of dark mode from store
    self.countryname = this.$route.params.country_name; //Get country name from router for sending request to api
    axios
      .get(
        "https://restcountries.eu/rest/v2/name/" +
          self.countryname.toLowerCase() +
          "?fullText=true"
      ) //make a request using country name
      .then((response) => {
        self.country_full_data = response.data;
        var additional_items = [
          ["topLevelDomain", "Top Level Domain"],
          ["currencies", "Currencies"],
          ["languages", "Languages"],
        ]; //check for these items in the remaining data
        for (var item in self.country_full_data[0]) {
          for (var j = 0; j < additional_items.length; j++) {
            if (item == additional_items[j][0]) {
              self.additional_info[additional_items[j][1]] =
                self.country_full_data[0][item]; //create an object that contains additional fields
            }
          }
        }
      });
  },
  methods: {
    goBack() {
      this.$router.go(-1); //go back by 1 page
    },
  },
  computed:{
    ...mapGetters(['isDarkModeOn'])
  }
};
</script>

<style scoped>
</style>