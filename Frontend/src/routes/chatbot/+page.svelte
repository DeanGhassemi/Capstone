<style>
    /* Custom CSS for black outline on the right side of the sidebar */
    .sidebar {
        border-right: 2px solid black;
    }

    /* Apply background color to the entire page */
    .background {
        background-color: #1E1E1E;
        height: 100vh;
        display: flex;
    }
    .sideBtns{
        border-radius: 20px;
        background-color: #422768;
    }



    /* Chat container */
        .chat-container {
            width: 70%;
            margin: auto; /* Center horizontally */
            margin-top: 10%; /* Center vertically */
            border-radius: 8px;
            background-color: #2d2d2d;
            border: 1px solid black;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        /* Chat messages */
        .chat-messages {
            height: 300px;
            overflow-y: auto;
            margin-bottom: 20px;
        }

        /* Chat input box */
        .chat-input {
            background-color: #7B4EBC;
            width: calc(100% - 80px);
            padding: 10px;
            border: 1px solid black;
            border-radius: 6px;
            outline: none;
            font-size: 16px;
            margin-right: 10px;
        }

        /* Send button */
        .send-button {
            width: 60px;
            height: 40px;
            background-color: #B297D8;
            border: none;
            border-radius: 6px;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
</style>
<div class="background">
    <!-- Left Sidebar -->
    <div class="flex-none w-42 bg-purple-800 text-white sidebar">
        <div class="flex flex-col justify-between h-full p-4">
            <!-- Home Button -->
            <button class="sideBtns w-36 h-14 bg-white mb-4">Home</button>
            
            <!-- Learn Routes Button -->
            <button class="sideBtns w-36 h-14 bg-white mb-4">Learn Routes</button>
            
            <!-- Settings Button -->
            <button class="sideBtns w-36 h-14 bg-white">Settings</button>
        </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex-grow">
        <div class="chat-container">
            <div class="chat-messages">
                <!-- Chat messages will be displayed here -->
            </div>
            <div class="chat-input-container">
                <input type="text" class="chat-input" placeholder="Type your message...">
                <button class="send-button">Send</button>
            </div>
        </div>
    </div>
</div>