# conversionAPI
To get all available groups of measures:
/convert/:measure

for example:
/convert/length</strong> will give this JSON response:
{
  "versions": 8,
  "measure": "length",
  "conversions": [
      {
          "From": "inches,
          "To": "centimeters",
          "Operator": "*",
          "Multiplyer": "2,54
      }, 
      {
          "From": "foot",
          "To": "centimeters",
          "Operator": "*",
          "Multiplyer": "30"
      },... 

Where "Versions" is an indicator of how many conversions that are
available, where "measure" tells you the type of measure and
conversions are the differnet conversions in an array. <br />
Inside the "Conversions" you are also given the operator for the
calculation and the multiplyer if you would like to convert into
deciliter for example.

To do a conversion:
/convert/:from/:to/:value

for example:
POST: /convert/inches/centimeters/13, will give this JSON response:

{
    "Value":"13",
    "From":"inches,
    "To":"centimeters",
    "Equals":33.02
}
