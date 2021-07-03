//----------------------------------------------------------------------------//
//                        locally unique Id Generator                         //
//----------------------------------------------------------------------------//
var IdCounter = 0;
function newUniqueId() {
    return 'uid-' + ++IdCounter;
}
export default newUniqueId;
