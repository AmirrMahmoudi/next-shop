"use client";

import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import { useEffect } from "react";

import { deleteAddress } from "@/actions/profile";
import SubmitButton from "@/components/SubmitButton";

const DeleteForm = ({ addresId }) => {
  const [stateDelete, formActionDelete] = useFormState(deleteAddress, {});

  useEffect(() => {
    toast(stateDelete?.message, { type: `${stateDelete?.status}` });
  }, [stateDelete]);

  return (
    <div className="form-delete-address">
      <form action={formActionDelete}>
        <input type="hidden" value={addresId} name="address_id" />
        <SubmitButton title={"حذف"} style={"btn btn-dark"} />
      </form>
    </div>
  );
};

export default DeleteForm;
