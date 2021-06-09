function strip(x: string | number) {
  if(typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponce {
  header = 'responce header'
  result = 'responce result'
}

class MyError {
  header = 'error header'
  error = 'error message'
}

function handle(res: MyResponce | MyError) {
  if(res instanceof MyResponce) {
    return {
      info: res.header + res.result
    }
  }else {
    return {
      info: res.header + res.error
    }
  }
}

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {

}

setAlertType('success')
setAlertType('warning')