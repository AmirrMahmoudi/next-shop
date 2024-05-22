"use client";

import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import { editAddress } from "@/actions/profile";
import SubmitButton from "@/components/SubmitButton";

const EditForm = ({ address, provinces, cities }) => {
  const [citiesFilter, setCitiesFilter] = useState(cities);
  const [stateEdit, formActionEdit] = useFormState(editAddress, {});

  useEffect(() => {
    toast(stateEdit?.message, { type: `${stateEdit?.status}` });
  }, [stateEdit]);

  function changeProvince(e) {
    setCitiesFilter(
      cities.filter((city) => city.province_id == e.target.value)
    );
  }

  return (
    <>
      <div className="position-relative">
        <form className="card card-body mt-3" action={formActionEdit}>
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">عنوان</label>
              <input
                name="title"
                defaultValue={address.title}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col col-md-6">
              <label className="form-label">شماره تماس</label>
              <input
                name="cellphone"
                defaultValue={address.cellphone}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col col-md-6">
              <label className="form-label">کد پستی</label>
              <input
                name="postal_code"
                defaultValue={address.postal_code}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col col-md-6">
              <label className="form-label">استان</label>
              <select
                name="province_id"
                defaultValue={address.province_id}
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
              <select
                name="city_id"
                defaultValue={address.city_id}
                className="form-select"
                onChange={changeProvince}
              >
                {citiesFilter.map((city) => (
                  <option value={city.id} key={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col col-md-12">
              <label className="form-label">آدرس</label>
              <textarea
                name="address"
                type="text"
                rows="5"
                className="form-control"
                defaultValue={address.address}
              ></textarea>
            </div>
          </div>
          <div>
            <SubmitButton title={"ویرایش"} style={"btn btn-primary mt-4"} />
          </div>
        </form>
        <div className="form-delete-address">
          <SubmitButton title={"حذف"} style={"btn btn-dark"} />
        </div>
      </div>
    </>
  );
};

export default EditForm;
