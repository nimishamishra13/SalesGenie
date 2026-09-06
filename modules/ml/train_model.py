import os
import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DATASET_PATH = os.path.join(
    BASE_DIR,
    "dataset",
    "lead_dataset.csv"
)

MODEL_PATH = os.path.join(
    BASE_DIR,
    "model.pkl"
)

ENCODER_PATH = os.path.join(
    BASE_DIR,
    "label_encoders.pkl"
)


df = pd.read_csv(DATASET_PATH)

print("Dataset loaded successfully.")
print("Rows:", len(df))
print("Industries:", df["industry"].unique())


label_encoders = {}

categorical_columns = [
    "industry",
    "company_size",
    "lead_status"
]


for col in categorical_columns:

    le = LabelEncoder()

    df[col] = le.fit_transform(df[col])

    label_encoders[col] = le


X = df.drop("converted", axis=1)

y = df["converted"]


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)


model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)


model.fit(
    X_train,
    y_train
)


predictions = model.predict(X_test)

accuracy = accuracy_score(
    y_test,
    predictions
)


print()
print(f"Model Accuracy: {accuracy * 100:.2f}%")
print()

print(
    classification_report(
        y_test,
        predictions
    )
)


joblib.dump(
    model,
    MODEL_PATH
)

joblib.dump(
    label_encoders,
    ENCODER_PATH
)


print()
print("Model saved:", MODEL_PATH)
print("Encoders saved:", ENCODER_PATH)