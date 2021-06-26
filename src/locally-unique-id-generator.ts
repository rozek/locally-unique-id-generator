//----------------------------------------------------------------------------//
//                        locally unique Id Generator                         //
//----------------------------------------------------------------------------//

  let IdCounter = 0

  function newUniqueId ():string {
    return 'uid-' + ++IdCounter
  }

  export default newUniqueId

