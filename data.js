const projects = [
  {
    id: 1,
    name: "NBA Injury Analysis",
    description: {
      projectProgress: [
        {
          title: "Scraping and Cleaning",
          details: [
            "Data was scraped from multiple sources, including injury reports, team schedules, and player/team info.",
            "Cleaning took a great effort due to data mismatches (e.g., player names, team changes), and required a great understanding of the NBA and research into specific injuries.",
          ],
        },
        {
          title: "Processing",
          details: [
            "This step involved several complex tasks, such as distinguishing injury-related events from other reasons (e.g., personal reasons).",
            "Calculated the number of games missed due to injury using team schedules.",
            "Identified injured body parts (e.g., eye) and regions (e.g., head).",
          ],
        },
        {
          title: "Visualizing & Analysis",
          details: [
            "Using PowerBI, I built an interactive dashboard that highlights key injury metrics.",
            "Allows users to drill down to explore the causes and effects of injuries.",
          ],
        },
      ],
      keyInsights: [
        {
          insight: "Interesting Metrics",
          details: [
            "98 unique injuries were identified: a wide variety of injuries in basketball.",
            "On average, an injury happens every 2 games.",
            " 9/10 players experienced injuries among those who played at least 40 games and 10 minutes/game (MPG). This figure jumps to 98% for players who played 80 games and 20 MPG.",
            " On average players experience a little over one injury, leading to about 8 games missed annually. Key players (25+ MPG) could miss up to 13 games due to more than two injuries.",
          ],
        },
        {
          insight: "Time Trend",
          details: [
            "While most injury metrics show a sharp increase over time, the average games missed per injury decreased significantly, from nearly 10 to under 6 games missed per injury.",
            "Injury frequency spikes in October, and March-April, likely due to long offseason breaks and accumulated fatigue near the season's end.",
          ],
        },
        {
          insight: "Most Common Injuries",
          details: [
            "Leg, foot & ankle were the most frequent injury regions by a wide margin.",
            "Hand injuries resulted in the most games missed on average, followed by shoulder and arm.",
          ],
        },
        {
          insight: "Injury Correlation and Causes",
          details: [
            "High or Low BMI can cause more injuries and require more time to recover.",
            "PG tends to miss the most games on average across all positions.",
            "Experience seems to have a greater impact on injury frequency and games missed than age, though both have some influence.",
            "There is a correlation between the games volume and injury frequency, but a weak correlation with the number of games missed.",
          ],
        },
      ],
    },
    featuredImageUrl: "images/nba injury analysis.png",
    visualizationUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZTIyMjcwZmYtNmEzZS00NGNiLTgxOWItMzEwMzBkYjM0YjA2IiwidCI6ImNiNDg0NDZlLTkwZTYtNGJmMS04MjViLTQwZTQ4ZmNjOWZmNiJ9",
    tags: {
      tool: ["Power BI"],
      theme: ["Sports"],
      topic: ["Basketball", "NBA"],
    },
  },
  {
    id: 2,
    name: "Apple Environmental Progress",
    description: {
      keyInsights: [
        {
          insight: "Emission Reduction Achievements",
          details: [
            "Apple has achieved nearly a 50% reduction  in gross carbon emissions from 2015 to 2022.",
            "Projections indicate a future where gross emissions could drop to 4.3M metric tons CO2e by 2030, with offsets contributing an additional -2.2M metric tons CO2e, bringing them below the target of 9.6M metric tons CO2e.",
          ],
        },
        {
          insight: "Emission Sources",
          details: [
            "Manufacturing accounts for most emissions (74%) but has also contributed the most to reductions, cutting nearly 16M metric tons CO2e—over 54% of the total reduction.",
          ],
        },
        {
          insight: "Economic Impact",
          details: [
            "Despite these reductions, Apples’s revenue grew by 68.7% and market capitalization surged by 329.3%, highlighting that sustainability efforts haven’t hindered profitability.",
          ],
        },
      ],
    },
    featuredImageUrl: "images/apple environmental progress dashboard.png",
    visualizationUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNDg2Y2NiN2UtZGU5Mi00MTM3LWJlOWEtMjJkM2IyYjU2YWNkIiwidCI6ImNiNDg0NDZlLTkwZTYtNGJmMS04MjViLTQwZTQ4ZmNjOWZmNiJ9",
    tags: {
      tool: ["Power BI"],
      theme: ["Business", "Technology", "Environment"],
      topic: ["Apple"],
    },
  },
  {
    id: 3,
    name: "Sales & CRM Pipelines Analysis",
    description: {
      keyInsights: [
        {
          insight: "Organization Size",
          details: [
            "Medium-sized organizations have the highest deal value, contributing over 58% of total closed deal value.",
            "Micro organizations, despite having nearly 10x more total leads compared to Large and Enterprise organizations, have the lowest total closed deal value.",
            "Large organizations have the quickest sales cycle at just 44 days, significantly faster than the second quickest at 60 days.",
          ],
        },
        {
          insight: "Product Performance",
          details: [
            "SAAS products lead in both the number of leads and closed deal value, making them a significant revenue stream, with Services products coming in as a close second.",
          ],
        },
        {
          insight: "Sales Phases",
          details: [
            "The leads funnel shows a gradual reduction in numbers through the stages, with notable drops from 'Proposal Sent' to 'Won' stages, indicating room for improvement in the closing phase.",
          ],
        },

        {
          insight: "Country Performance",
          details: [
            "Italy leads with the highest number of closed leads (80) and closed deal value ($220K), along with a strong conversion rate of 12.9%.",
            "Switzerland has the highest average sales cycle duration (68 days) and the second lowest conversion rate, indicating a longer negotiation process.",
          ],
        },
        {
          insight: "Performance by Sales Agent",
          details: [
            "Laura Thompson's sales performance is elite, leading with 93 closed leads and a total closed deal value of $218K. She has a high conversion rate of 12.4% and an average sales cycle of 59 days, showcasing her efficiency and effectiveness.",
            "Michael Brown and Jessica Martinez follow with 58 and 61 closed leads, respectively. Michael has a higher closed deal value ($177K) but a longer average sales cycle (71 days), suggesting more complex or high-value deals.",
          ],
        },
        {
          insight: "Performance by Industry",
          details: [
            "Transportation & Logistics and Banking & Finance lead in the number of closed leads (68 and 47 respectively) and closed deal values ($173K and $122K), with strong conversion rates (12.9% and 11.6%).",
            "Education & Science and Recreation & Sports have the shortest average sales cycles, both under 50 days, indicating efficient sales processes in these industries.",
          ],
        },
      ],
    },
    featuredImageUrl: "images/sales and crm.png",
    visualizationUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiM2Y4NTc0YmQtNjk4NS00M2E4LWFjN2MtOGU0ZGYzZTkxNjg3IiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
    tags: {
      tool: ["Power BI"],
      theme: ["Business"],
      topic: ["Sales", "CRM"],
    },
  },
];
