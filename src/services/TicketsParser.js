export const TicketsParser = class {
    constructor(data, idx) {
        this.id = idx;
        this.price = data.price;
        this.carrier = data.carrier;
        this.flightDetails = this.modelSegments(data.segments);
        this.duration = this.getAllDuration(data.segments);
    }
  
    modelSegments = (data) => {
      return data.map((item) => {
        return {
          route: `${item.origin} – ${item.destination}`,
          time: this.getTime(item.date, item.duration),
          stopsTitle: this.getStopsTitle(item.stops),
          stops: item.stops,
        }
      })
    }
  
    getTime = (date, duration) => {
      const timeStart = this.formatTime(date);
      const timeEnd = this.formatTime(new Date(date).setMinutes(new Date(date).getMinutes() + duration));
      return {
        time: `${timeStart} - ${timeEnd}`,
        duration: this.formatDuration(duration),
      }
    }
  
    formatTime(data) {
      const date = new Date(data);
      return `${TicketsParser.leadingZero(date.getHours())}:${TicketsParser.leadingZero(date.getMinutes())}`;
    }  
  
    formatDuration(minutes) {
      const hours = TicketsParser.leadingZero((minutes - (minutes % 60)) / 60);
      const min = TicketsParser.leadingZero(minutes % 60);
  
      return `${hours}ч ${min}м`
    }
  
    getAllDuration(data) {
      let duration = 0;
      data.forEach((el) => duration += el.duration);
      return duration;
    }
  
    getStopsTitle(data) {
      if (data.length === 1) {
        return 'пересадка';
      }
      if (data.length > 1) {
        return 'пересадки';
      }
      if (data.length === 0) {
        return 'прямой';
      }
    }
  
    static parseTicket(data, idx) {
      return new TicketsParser(data, idx);
    }
  
    static parseTickets(data) {
      if (data.length) {
        return data.map(TicketsParser.parseTicket);
      } else {
        return TicketsParser.parseTicket(data);
      }
    }
  
    static leadingZero(data) {
      if (data < 10) {
        return `0${data}`;
      }
      return data;
    }
  };
  