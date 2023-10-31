import { createContext, useReducer } from "react";

export const TareasContext = createContext();

const tareasReducer = (state, action) => {
//   console.log(action);
  switch (action.type) {
    case "agregar_tarea":
      return [...state, action.payload];
      break;
    case "completar_tarea":
      return state.map((tarea) =>
        tarea.id == action.payload.id ? { ...tarea, completada: true } : tarea
      );
      break;
    default:
      return state;
  }
};

export const TareasProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tareasReducer, []);

  const data = { tasks, dispatch };

  return (
    <TareasContext.Provider value={data}>{children}</TareasContext.Provider>
  );
};
