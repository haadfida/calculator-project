export const ADD = 'ADD'
export const addOne = () => ({ type: ADD })

export const SUB = 'SUB'
export const subOne = () => ({ type: SUB })

export const SETCOUNT = 'SETCOUNT'
export const setCount = (value: any) => ({
    type: SETCOUNT,
    payload: value
})

export const SETLENGTH = 'SETLENGTH'
export const setLength = (value) => ({
  type: SETLENGTH,
  payload: value
})

export const SETWIDTH = 'SETWIDTH'
export const setWidth = (value) => ({
  type: SETWIDTH,
  payload: value
})

export const SETGRAMMAGE = 'SETGRAMMAGE'
export const setGrammage = (value) => ({
  type: SETGRAMMAGE,
  payload: value
})

export const SETWEIGHT = 'SETWEIGHT'
export const setWeight = (value) => ({
  type: SETWEIGHT,
  payload: value
})

export const SETISCUSTOM = 'SETISCUSTOM'
export const setIsCustom = (value) => ({
  type: SETISCUSTOM,
  payload: value
})

export const SETPAPERTYPE = 'SETPAPERTYPE'
export const setPaperType= (value) => ({
  type: SETPAPERTYPE,
  payload: value
})

export const SETPAPERSIZE = 'SETPAPERSIZE'
export const setPaperSize= (value) => ({
  type: SETPAPERSIZE,
  payload: value
})
