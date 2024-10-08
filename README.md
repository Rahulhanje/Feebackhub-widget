# Feedback Widget

This project is a simple React feedback widget using Tailwind CSS for styling and integrated with Supabase for database handling. It allows users to submit feedback with ratings and provides an interactive UI.

## Project Overview

The project showcases a feedback widget built with React and styled using Tailwind CSS. The widget allows users to provide feedback, submit ratings, and send it to the server via Supabase's remote procedure call (RPC) functionality.

### Key Features:
- **UI Components:** Includes components such as buttons, inputs, labels, popovers, and text areas.
- **Star Rating System:** Allows users to select a rating from 1 to 5 stars.
- **Tailwind CSS Styling:** Provides a responsive and modern design using Tailwind CSS.
- **Supabase Integration:** Uses Supabase RPC for feedback submission and database management.
- **Popover Interaction:** Feedback form is displayed inside a popover triggered by a button.

## Features

* **UI Components:** Includes form elements like buttons, inputs, labels, and text areas.
* **Star Rating:** Users can rate from 1 to 5 stars by interacting with the star icons.
* **Supabase RPC:** Submits user feedback via a Supabase stored procedure using the `add_feedback` RPC call.
* **Tailwind CSS:** Utilizes Tailwind for flexible, utility-first styling.
* **Popover-based UI:** The feedback form is presented in a popover, accessible via a feedback button.

## Components

- **`Button`**: A clickable button that triggers the popover with the feedback form.
- **`Label`**: Provides labels for form elements such as name, email, and feedback.
- **`Input`**: Accepts user input for name and email.
- **`Textarea`**: A multi-line input for user feedback.
- **`Popover`**: A popover that contains the feedback form, triggered by the feedback button.
- **`StarIcon`**: Clickable star icons for rating feedback.
- **`MessageCircleIcon`**: Icon displayed on the feedback button.

## Supabase RPC

The feedback data is submitted to Supabase via an RPC call. The submitted data includes:

- `p_project_id`: The project ID to which the feedback belongs.
- `p_user_name`: The user's name.
- `p_user_email`: The user's email address.
- `p_message`: The feedback message.
- `p_rating`: The rating given by the user (1-5).

## Installation
1. Clone this repo

2. Install the necessary packages:

```bash
npm install
```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application.

## Contact Information

For any questions or feedback, please contact the project maintainers:

* **Email:** rahulhanje0.7@gmail.com

