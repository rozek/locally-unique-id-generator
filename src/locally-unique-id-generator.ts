//----------------------------------------------------------------------------//
//                        locally unique Id Generator                         //
//----------------------------------------------------------------------------//

  let IdCounter = 0                         // hidden in the closure of "nextId"

  function nextId ():number {            // a really unique incrementor function
    return ++IdCounter
  }

/**** make global.nextId a real singleton ****/

  const global = /*#__PURE__*/ Function('return this')()
// see https://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript

  if (typeof global.nextId !== 'function') {
    global.nextId = nextId
  }

/**** newUniqueId - the actually exported function ****/

  function newUniqueId ():string {
    return 'uid-' + global.nextId()
  }

  export default newUniqueId

