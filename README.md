# Brand-O-Meter

The Brand-O-Meter is the survey for customer reviews of produces or services. 

To measure brand impact and campaign efficiency, the creative of Brand-O-Meter is a solution to find answers and insights of the following questions:
- What are the parameters to analyze the brand campaign?
- How to target the right audience for the survey?
- How to bring transparency to the survey?
- How to collect the requisite number of responses in time?

Measuring the brand impact through inexpensive and automated deployment of brand studies (that is not yet offered by existing Google Display products).

1. At the initiation stage, setup of the Google Cloud project and services along with the installing the Brand-o-meter addon on Google Sheets to generate and design the materialize HTML5 Survey Creative.
2. The survey design required creative intelligence approach as the question order was dynamic and personalized to the individual’s answers.
3. The Survey creatives were uploaded in DV 360 and trafficking for display campaigns was done by setting up audience targeting of Geographic, Demographic, Interests and Affinity / In-market buckets.
4. The responses of the campaign will collect in BigQuery server. 
---

# Functionality of Brand-O-Meter

In creative, there are three different page types. Details for each are provided below.

## 1) Landing Page

- Main Brand logo on top side 
- Main Land page text line 
- Start Survey Button

![image](https://user-images.githubusercontent.com/101398238/205506663-bab4b474-1b60-45b9-975e-1310adcab05c.png)


## 2) Q&A Page

- Sequential rationalist questioning based on user reaction.
- Options are being shuffled for Checking the randomization of the choices on the user interface.

- Type of Questions:
1. Questions with single choice answers
2. Questions with multiple choice answers
3. Questions with input type answers 

![image](https://user-images.githubusercontent.com/101398238/205506749-4f5a2fce-3c9a-4d1f-9057-9844d415a9cc.png)  ![image](https://user-images.githubusercontent.com/101398238/205506808-3baf260d-0695-4044-a0c0-ae3197258cc4.png)  ![image](https://user-images.githubusercontent.com/101398238/205506874-d6bda59d-cda3-4b30-843e-48d562607b08.png)

## 3) Thanks Page

- Line of Acknowledgement for finishing the Brand-O-Meter survey.
- Coupon box for coping and supplying offer code.
- Coupon code redemption url with a logo or text attached.

![image](https://user-images.githubusercontent.com/101398238/205506387-9a5d4ba3-7b38-42b6-bba3-5fe073222d87.png)

---

# Tracking on Brand-O-Meter

## Response Pixel Implementation on Q&A page collects below user actions:	
- Collect User option visual string (Eg. 1:B|2:CD|3:B|4:B|5:|6:BC|7:A|8:D|9:test@gmail.com)
- Collect User option response string (Eg. 1:A|2:CF|3:G|4:J|5:|6:PR|7:T|8:X|9:test@gmail.com)
- Collect User interaction start-end time in Millisecond (Eg. 1670169837172|1670169853952)
- Collect  the user BOMID (Browser object Model Identity) (Eg. f8190aee-3794-41ca-9297-a83a201ad4d6)

## Page Visual pixel implementation for user segmentation:
The main purpose of completing the survey is to expand the campaign's audience and run it page-by-page.

## Pageview GA event Implementation: 
Collect the virtual pageview of landpage, Q&A page and thanks page on google analytics. 

---

