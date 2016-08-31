function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (!!bool===bool) {
  	return true;
  }else{
  	return false;
  }
}

boo(null);