import { createSelector } from "@reduxjs/toolkit";

export const selectCountriesState = (state) => state.countries;

export const selectAllCountries = (state) => state.countries.data;

export const selectSelectedRegion = (state) => state.countries.selectedRegion;

export const selectLoading = (state) => state.countries.loading;

export const selectError = (state) => state.countries.error;

export const selectFilteredCountries = createSelector([selectAllCountries, selectSelectedRegion], (countries, selectedRegion) => {
  if (selectedRegion === "All") {
    return countries;
  }
  return countries.filter((country) => country.region === selectedRegion);
});
