import React, { useState, useEffect } from 'react';
import { format, differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, addYears } from 'date-fns';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Calculator, Clock, Gift, MapPin, Calendar as CalendarDays, Timer, Star } from 'lucide-react';
import './lib/utils';
import { 
  BannerAd, 
  MediumRectangleAd, 
  LargeRectangleAd, 
  MobileBannerAd, 
  ResponsiveAd, 
  InFeedAd,
  SkyscraperAd,
  ContentBreakAd
} from './components/AdComponents';

interface AgeResult {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  nextBirthday: Date;
  daysUntilBirthday: number;
  timeZone: string;
  timeZoneOffset: string;
}

function App() {
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [calculateToDate, setCalculateToDate] = useState<Date>(new Date());
  const [result, setResult] = useState<AgeResult | null>(null);
  const [liveAge, setLiveAge] = useState<AgeResult | null>(null);
  const [timeZone, setTimeZone] = useState<string>('');
  const [timeZoneOffset, setTimeZoneOffset] = useState<string>('');
  const [showCelebrities, setShowCelebrities] = useState(false);

  useEffect(() => {
    // Detect user's time zone
    const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(detectedTimeZone);
    
    // Get time zone offset
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const sign = offset > 0 ? '-' : '+';
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const offsetString = `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    setTimeZoneOffset(`UTC${offsetString}`);
  }, []);

  // Live age calculation that updates every second
  useEffect(() => {
    if (!birthDate) {
      setLiveAge(null);
      return;
    }

    const updateLiveAge = () => {
      const now = new Date();
      const calculatedAge = calculateAgeForDate(birthDate, now);
      setLiveAge(calculatedAge);
    };

    updateLiveAge();
    const interval = setInterval(updateLiveAge, 1000);
    return () => clearInterval(interval);
  }, [birthDate, timeZone, timeZoneOffset]);

  const calculateAgeForDate = (birth: Date, targetDate: Date): AgeResult => {
    const years = differenceInYears(targetDate, birth);
    const months = differenceInMonths(targetDate, birth) % 12;
    
    const yearMonthDate = new Date(birth);
    yearMonthDate.setFullYear(birth.getFullYear() + years);
    yearMonthDate.setMonth(birth.getMonth() + months);
    const days = differenceInDays(targetDate, yearMonthDate);
    
    const hours = differenceInHours(targetDate, birth) % 24;
    const minutes = differenceInMinutes(targetDate, birth) % 60;
    const seconds = differenceInSeconds(targetDate, birth) % 60;
    const totalDays = differenceInDays(targetDate, birth);
    const totalHours = differenceInHours(targetDate, birth);
    const totalMinutes = differenceInMinutes(targetDate, birth);

    let nextBirthday = new Date(birth);
    nextBirthday.setFullYear(targetDate.getFullYear());
    
    if (nextBirthday <= targetDate) {
      nextBirthday = addYears(nextBirthday, 1);
    }
    
    const daysUntilBirthday = differenceInDays(nextBirthday, targetDate);

    return {
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
      totalDays,
      totalHours,
      totalMinutes,
      nextBirthday,
      daysUntilBirthday,
      timeZone,
      timeZoneOffset
    };
  };

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const targetDate = new Date(calculateToDate);
    const calculatedAge = calculateAgeForDate(birth, targetDate);
    setResult(calculatedAge);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  // Common ad layout for all views
  const AdLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        {/* Persistent Left Sidebar Ads - Desktop */}
        <div className="hidden xl:block w-[180px] p-4">
          <div className="sticky top-4 space-y-6">
            <SkyscraperAd />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Mobile Banner - Always Visible */}
          <MobileBannerAd className="mb-4" />
          
          {/* Top Desktop Banner - Always Visible */}
          <BannerAd className="mb-6 hidden md:block" />
          
          {children}
          
          {/* Bottom Responsive Ad - Always Visible */}
          <ResponsiveAd className="mt-8 mb-4" />
        </div>

        {/* Right Sidebar Ads - Desktop */}
        <div className="hidden lg:block w-[360px] p-4">
          <div className="sticky top-4 space-y-6">
            <MediumRectangleAd />
            <LargeRectangleAd />
          </div>
        </div>
      </div>
    </div>
  );

  if (showCelebrities) {
    return (
      <AdLayout>
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => setShowCelebrities(false)} 
            className="mb-6"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Back to Age Calculator
          </Button>

          {/* Celebrity content placeholder */}
          <Card className="shadow-card border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center">
                <Star className="mr-2 h-8 w-8" />
                Famous People Birthdays
              </CardTitle>
              <CardDescription className="text-lg">
                Explore celebrity birthdays and calculate their exact ages
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                Celebrity database feature coming soon!
              </p>
              <p className="text-lg text-muted-foreground">
                This will include thousands of famous people with real-time age calculations.
              </p>
            </CardContent>
          </Card>

          <ContentBreakAd />
          <InFeedAd className="mt-6" />
        </div>
      </AdLayout>
    );
  }

  return (
    <AdLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-button">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Age Calculator</h1>
              <p className="text-lg text-gray-600">Calculate your exact age with precision down to minutes</p>
            </div>
          </div>

          {/* Content break ad after header */}
          <ContentBreakAd />

          {/* Input Card */}
          <Card className="shadow-card border-0">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Enter Your Details</CardTitle>
              <CardDescription>
                Select your birth date and target calculation date
                {timeZone && (
                  <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    Detected time zone: {timeZone} ({timeZoneOffset})
                  </div>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Birth Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                <div className="relative">
                  <input
                    type="date"
                    value={birthDate ? format(birthDate, 'yyyy-MM-dd') : ''}
                    onChange={(e) => setBirthDate(e.target.value ? new Date(e.target.value) : undefined)}
                    max={format(new Date(), 'yyyy-MM-dd')}
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Calculate To Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Calculate Age On</label>
                <div className="relative">
                  <input
                    type="date"
                    value={format(calculateToDate, 'yyyy-MM-dd')}
                    onChange={(e) => setCalculateToDate(new Date(e.target.value))}
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Calculate Button */}
              <Button 
                onClick={calculateAge}
                disabled={!birthDate}
                className="w-full h-12 bg-gradient-primary hover:opacity-90 shadow-button text-lg font-semibold text-white"
                size="lg"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate My Age
              </Button>

              {/* Famous People Button */}
              <Button 
                onClick={() => setShowCelebrities(true)}
                variant="outline"
                className="w-full h-12 text-lg font-semibold"
                size="lg"
              >
                <Star className="mr-2 h-5 w-5" />
                Explore Famous People Birthdays
              </Button>
            </CardContent>
          </Card>

          {/* In-feed ad between input and results */}
          {(liveAge || result) && <InFeedAd />}

          {/* Live Age Display */}
          {liveAge && (
            <Card className="shadow-card border-0 bg-gradient-primary text-white">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl flex items-center justify-center">
                  <Clock className="mr-2 h-6 w-6" />
                  Your Current Age (Live)
                </CardTitle>
                <CardDescription className="text-white opacity-80">
                  Updates every second • {format(new Date(), "MMMM d, yyyy 'at' h:mm:ss a")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-bold">{liveAge.years}</div>
                    <div className="text-xs md:text-sm opacity-90">Years</div>
                  </div>
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-bold">{liveAge.months}</div>
                    <div className="text-xs md:text-sm opacity-90">Months</div>
                  </div>
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-bold">{liveAge.days}</div>
                    <div className="text-xs md:text-sm opacity-90">Days</div>
                  </div>
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-bold animate-pulse">{liveAge.hours}</div>
                    <div className="text-xs md:text-sm opacity-90">Hours</div>
                  </div>
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-bold animate-pulse">{liveAge.minutes}</div>
                    <div className="text-xs md:text-sm opacity-90">Minutes</div>
                  </div>
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-bold animate-pulse">{liveAge.seconds}</div>
                    <div className="text-xs md:text-sm opacity-90">Seconds</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Content break ad between live age and results */}
          {result && <ContentBreakAd />}

          {/* Results - Multiple Format Display */}
          {result && (
            <div className="space-y-6">
              {/* Traditional Age Format */}
              <Card className="shadow-card border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center">
                    <CalendarDays className="mr-2 h-6 w-6" />
                    Traditional Age Format
                  </CardTitle>
                  <CardDescription>
                    Standard age display in years, months, and days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-6 bg-gradient-primary rounded-lg text-white">
                      <div className="text-4xl font-bold mb-2">{result.years}</div>
                      <div className="text-lg opacity-90">Years</div>
                    </div>
                    <div className="text-center p-6 bg-gray-100 rounded-lg">
                      <div className="text-4xl font-bold text-gray-800 mb-2">{result.months}</div>
                      <div className="text-lg text-gray-600">Months</div>
                    </div>
                    <div className="text-center p-6 bg-gray-100 rounded-lg">
                      <div className="text-4xl font-bold text-gray-800 mb-2">{result.days}</div>
                      <div className="text-lg text-gray-600">Days</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-lg font-medium text-gray-800">
                      You are <span className="text-blue-600 font-bold">{result.years} years, {result.months} months, and {result.days} days</span> old
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      As of {format(calculateToDate, "MMMM d, yyyy")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* In-feed ad between sections */}
              <InFeedAd />

              {/* Total Days Lived */}
              <Card className="shadow-card border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center">
                    <Gift className="mr-2 h-6 w-6" />
                    Total Days Lived
                  </CardTitle>
                  <CardDescription>
                    Complete count of days since your birth
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-primary rounded-full text-white mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{formatNumber(result.totalDays)}</div>
                        <div className="text-sm opacity-90">Days</div>
                      </div>
                    </div>
                    <p className="text-xl font-medium text-gray-800 mb-2">
                      You have lived for <span className="text-blue-600 font-bold">{formatNumber(result.totalDays)} days</span>
                    </p>
                    <p className="text-gray-600">
                      That's approximately <span className="font-semibold">{formatNumber(Math.floor(result.totalDays / 365.25))} years</span> of life experience
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Content break ad */}
              <ContentBreakAd />

              {/* Total Hours and Minutes */}
              <Card className="shadow-card border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center">
                    <Timer className="mr-2 h-6 w-6" />
                    Total Time Lived
                  </CardTitle>
                  <CardDescription>
                    Complete breakdown of hours and minutes lived
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-primary rounded-lg text-white">
                      <div className="text-3xl font-bold mb-2">{formatNumber(result.totalHours)}</div>
                      <div className="text-lg opacity-90">Total Hours</div>
                      <div className="text-sm opacity-75 mt-2">
                        {formatNumber(Math.floor(result.totalHours / 24))} days worth of hours
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gray-100 rounded-lg">
                      <div className="text-3xl font-bold text-gray-800 mb-2">{formatNumber(result.totalMinutes)}</div>
                      <div className="text-lg text-gray-600">Total Minutes</div>
                      <div className="text-sm text-gray-500 mt-2">
                        {formatNumber(Math.floor(result.totalMinutes / 60))} hours worth of minutes
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3 text-center">
                    <p className="text-lg font-medium text-gray-800">
                      You have experienced <span className="text-blue-600 font-bold">{formatNumber(result.totalHours)} hours</span> of life
                    </p>
                    <p className="text-lg font-medium text-gray-800">
                      That's <span className="text-blue-600 font-bold">{formatNumber(result.totalMinutes)} minutes</span> of precious moments
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        Time zone: {result.timeZone} ({result.timeZoneOffset})
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Birthday Card */}
              <Card className="shadow-card border-0 bg-gradient-to-r from-purple-100 to-pink-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl flex items-center justify-center">
                    <Gift className="mr-2 h-5 w-5" />
                    Next Birthday
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg">
                    <span className="font-semibold">{result.daysUntilBirthday} days</span> until you turn{" "}
                    <span className="font-bold text-blue-600">{result.years + 1}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {format(result.nextBirthday, "EEEE, MMMM d, yyyy")}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </AdLayout>
  );
}

export default App;