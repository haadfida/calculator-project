import { combineReducers } from "redux";
import {
  ADD,
  SUB,
  SETCOUNT,
  SETLENGTH,
  SETWIDTH,
  SETGRAMMAGE,
  SETWEIGHT,
  SETISCUSTOM,
  SETPAPERTYPE,
  SETPAPERSIZE,
} from "../actions/PaperCalculationActions";

const CountReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUB:
      return { count: state.count - 1 };
    case SETCOUNT:
      return { count: action.payload };
    default:
      return state;
  }
};

const PaperReducer = (
  state = {
    length: 0,
    width: 0,
    grammage: 0,
    weight: 0,
    iscustom: 0,
    papertype: "CUSTOM",
    papersize: "",
  },
  action
) => {
  switch (action.type) {
    case SETLENGTH:
      return {
        length: action.payload,
        width: state.width,
        grammage: state.grammage,
        weight: state.weight,
        iscustom: state.iscustom,
        papertype: state.papertype,
        papersize: state.papersize,
      };
    case SETWIDTH:
      return {
        length: state.length,
        width: action.payload,
        grammage: state.grammage,
        weight: state.weight,
        iscustom: state.iscustom,
        papertype: state.papertype,
        papersize: state.papersize,
      };
    case SETGRAMMAGE:
      return {
        length: state.length,
        width: state.width,
        grammage: action.payload,
        weight: state.weight,
        iscustom: state.iscustom,
        papertype: state.papertype,
        papersize: state.papersize,
      };
    case SETWEIGHT:
      return {
        length: state.length,
        width: state.width,
        grammage: state.grammage,
        weight: action.payload,
        iscustom: state.iscustom,
        papertype: state.papertype,
        papersize: state.papersize,
      };

    case SETISCUSTOM:
      return {
        length: state.length,
        width: state.width,
        grammage: state.grammage,
        weight: state.weight,
        iscustom: action.payload,
        papertype: state.papertype,
        papersize: state.papersize,
      };

    case SETPAPERTYPE:
        console.log({
            length: state.length,
            width: state.width,
            grammage: action.payload,
            weight: state.weight,
            iscustom: state.iscustom,
            papertype: action.payload,
            papersize: action.payload,
          });
      return {
        length: state.length,
        width: state.width,
        grammage: action.payload,
        weight: state.weight,
        iscustom: state.iscustom,
        papertype: action.payload,
        papersize: state.papersize,
      };
    case SETPAPERSIZE:
      return {
        length: state.length,
        width: state.width,
        grammage: action.payload,
        weight: action.payload,
        iscustom: state.iscustom,
        papertype: state.papertype,
        papersize: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  count: CountReducer,
  paper: PaperReducer,
});
