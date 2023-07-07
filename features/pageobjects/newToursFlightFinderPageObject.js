class FlightFinder
{
    get clickOnFlights()
    {
        return $("//a[text()='Flights']");
    }

    get flightType()
    {
        return $("//input[@value='oneway']");
    }

    get noOfPassengers()
    {
        return $("//select[@name='passCount']");
    }

    get departFrom()
    {
        return $("//select[@name='fromPort']");
    }

    get flightOnMonth()
    {
        return $("//select[@name='fromMonth']");
    }

    get flightOnDay()
    {
        return $("//select[@name='fromDay']");
    }

    get arriveTo()
    {
        return $("//select[@name='toPort']");
    }

    get returnOnMonth()
    {
        return $("//select[@name='toMonth']");
    }

    get returnOnDay()
    {
        return $("//select[@name='toDay']");
    }

    get serviceClass()
    {
        return $("//input[@value='Business']");
    }

    get airline()
    {
        return $("//select[@name='airline']");
    }

    get flightOnMonth()
    {
        return $("//select[@name='fromMonth']");
    }

    get submit()
    {
        return $("//input[@name='findFlights']");
    }

    flightFinder()
    {
        this.clickOnFlights.click();
        this.flightType.click();
        this.noOfPassengers.selectByVisibleText('3');
        this.departFrom.selectByVisibleText('London');
        this.flightOnMonth.selectByVisibleText('December');
        this.flightOnDay.selectByVisibleText('19');
        this.arriveTo.selectByVisibleText('New York');
        this.returnOnMonth.selectByVisibleText('January');
        this.returnOnDay.selectByVisibleText('19');
        this.serviceClass.click();
        this.airline.selectByVisibleText('Blue Skies Airlines');
        this.submit.click();
    }
}

export default new FlightFinder();