//----------------------------------------------------------------------------//
//                        locally unique Id Generator                         //
//----------------------------------------------------------------------------//
var IdCounter = 0; // hidden in the closure of "nextId"
function nextId() {
    return ++IdCounter;
}
/**** make global.nextId a real singleton ****/
var global = /*#__PURE__*/ Function('return this')();
// see https://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript
if (typeof global.__nextId !== 'function') {
    global.__nextId = nextId;
}
/**** newUniqueId - the actually exported function ****/
function newUniqueId() {
    return 'uid-' + global.__nextId();
}

export default newUniqueId;
//# sourceMappingURL=locally-unique-id-generator.esm.js.map
