import Moment from 'moment'

// Convert timestamp to date formats 
export const fromNow = (time) => {
  return Moment(time).valueOf() <= Moment().subtract(7, 'days').valueOf() 
    ? Moment(time).format('LLL') 
    : Moment(time).utc().fromNow()
}

export const dateTimeFormat = (time) => Moment(time).format()


