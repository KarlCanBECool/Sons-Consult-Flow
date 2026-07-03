import React, { createContext, useContext, useState, useCallback } from "react";

interface FormData {
  [key: string]: any;
}

interface FormContextValue {
  formData: FormData;
  saveAnswer: (key: string, value: any) => void;
}

const FormContext = createContext<FormContextValue>({
  formData: {},
  saveAnswer: () => {},
});

export function useFormContext() {
  return useContext(FormContext);
}

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>({});

  const saveAnswer = useCallback((key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <FormContext.Provider value={{ formData, saveAnswer }}>
      {children}
    </FormContext.Provider>
  );
}
