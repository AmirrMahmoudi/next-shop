"use client";

import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import { createAddress } from "@/actions/profile";
import SubmitButton from "@/components/SubmitButton";

const CreateForm = ({ provinces, cities }) => {
  const [citiesFilter, setCitiesFilter] = useState(
    cities.filter((city) => city.province_id == provinces[0].id)
  );

  const changeProvince = (e) => {
    // console.log(e.target.value);
    setCitiesFilter(
      cities.filter((city) => city.province_id == e.target.value)
    );
  };

  const [stateCreate, formActionCreate] = useFormState(createAddress, {});

  useEffect(() => {
    toast(stateCreate?.message, { type: `${stateCreate?.status}` });
  }, [stateCreate]);
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        ایجاد آدرس جدید
      </button>

      <form
        className="collapse mt-3"
        id="collapseExample"
        action={formActionCreate}
      >
        <div className="card card-body">
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">عنوان</label>
              <input name="title" type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">شماره تماس</label>
              <input name="cellphone" type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">کد پستی</label>
              <input name="postal_code" type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">استان</label>
              <select
                name="province_id"
                className="form-select"
                onChange={changeProvince}
              >
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col col-md-6">
              <label className="form-label">شهر</label>
              <select name="city_id" className="form-select">
                {citiesFilter.map((city) => (
                  <option value={city.id} key={city.id}>
                    {city.name}
                  </option>
                ))}

                {/* <option selected>تهران</option>
                <option defaultValue="1">اصفهان</option>
                <option defaultValue="2">شیراز</option>
                <option defaultValue="3">یزد</option> */}
              </select>
            </div>
            <div className="col col-md-12">
              <label className="form-label">آدرس</label>
              <textarea
                name="address"
                type="text"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div>
            <SubmitButton title={"ایجاد"} style={"btn btn-primary mt-4"} />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateForm;
